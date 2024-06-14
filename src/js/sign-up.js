import { SignUpForm, compileSignUpFormMarkup } from 'mayanbet-sdk';
import { openModal } from '@/js/modal';
import { setToLS } from '@/js/local-storage';

const modalContentRef = document.querySelector('.js-app-modal-content');

export const openSignUpModal = ({ isBlocked } = {}) => {
  const markup = compileSignUpFormMarkup({
    title: 'Junte-se a nós',
    isEmailOnFirstPosition: true,
  });

  modalContentRef.innerHTML = '';
  modalContentRef.insertAdjacentHTML('beforeend', markup);

  new SignUpForm({
    formRef: document.forms.signUp,
    submitCallback: async () => {
      setToLS('isAlreadyRegistered', true);
    },
  });

  openModal({ isBlocked });
};
