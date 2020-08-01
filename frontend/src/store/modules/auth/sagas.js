import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const { data } = yield call(axios.post, '/token', payload);

    yield put(actions.loginSuccess({ ...data }));

    localStorage.setItem("userId", data.id);
    localStorage.setItem("userAdmin", data.admin);


    toast.success('Usuário Logado com sucesso');


    axios.defaults.headers.Authorization = `Bearer ${data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou Senha Inválidos');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload, }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { nome, email, password } = payload;

  // const userId = localStorage.getItem("userId");
  const userAdmin = localStorage.getItem("userAdmin");


  if (userAdmin === 'true') {

  try {
    yield call(axios.post, `/users`, {
      email,
      nome,
      password,
    });
    toast.success('Conta criada com sucesso!');
    console.log('register');
    yield put(actions.registerCreatedSuccess({ nome, email, password }));
    history.push('/login');
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map(error => toast.error(error));
    } else {
      toast.error('Erro desconhecido***');
    }

    yield put(actions.registerFailure());
    }
  } else {
    toast.error('Você não tem acesso para criar um usuário');
    console.log(payload);
  }

}


// eslint-disable-next-line consistent-return
// function* updateRequest({ payload }) {
//   const { nome, email, password, admin } = payload;

//   const userId = localStorage.getItem("userId");
//   // const userAdmin = localStorage.getItem("userAdmin");
//   const id = userId;
//   // const admin = userAdmin;



//   try {
//     yield call(axios.put, `/users/${id}`, {
//       email,
//       nome,
//       password,
//       admin: admin,
//     });
//     toast.success('Conta alterada com sucesso!');
//     yield put(actions.registerUpdatedSuccess({ nome, email, password }));
//   } catch (e) {
//     const errors = get(e, 'response.data.errors', []);
//     const status = get(e, 'response.status', 0);

//     if (status === 401) {
//       toast.error('Você precisa fazer login novamente.');
//       yield put(actions.loginFailure());
//       return history.push('/login');
//     }

//     if (errors.length > 0) {
//       errors.map(error => toast.error(error));
//     } else {
//       toast.error('Erro desconhecido');
//     }

//     yield put(actions.registerFailure());
//   }
// }

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  // takeLatest(types.UPDATE_REQUEST, updateRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
