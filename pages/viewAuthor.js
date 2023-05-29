import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  console.warn(typeof obj);
  clearDom();
  const domString = `
  <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <div class="mt-5">
        <i id="update-author--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Edit Info</i>
        <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Remove</i>
      </div>
    </div>
    <div class="text-white ms-5 details">
      <h5>${obj.first_name} ${obj.last_name}</h5>
      <p class="card-text bold">${obj.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span> Author' : 'Author'}</p>
      Author Email: <a href="mailto:${obj.email}">${obj.email}</a>    
      </div>
    </div>`;
  renderToDOM('#view', domString);
};

export default viewAuthor;
