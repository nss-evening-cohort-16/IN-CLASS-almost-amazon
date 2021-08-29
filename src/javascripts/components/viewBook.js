const viewBook = (obj) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  document.querySelector('#view').innerHTML += `
  <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <img src=${obj.image} alt=${obj.title} style="width: 300px;">
      <div class="mt-5">
        <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>
    <div class="text-white ms-5 details">
      <h5>${obj.title} by ${obj.author.first_name} ${obj.author.last_name} ${obj.author.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      Author's Email: <a href="mailto:${obj.author.email}">${obj.author.email}</a>
      <hr>
      <p>${obj.description || 'Please add a description for this book.'}</p>
      <hr>
      <p>PRICE: ${obj.sale ? `$${obj.price} <span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>` : `$${obj.price}`}</p>      
    </div>
  </div>`;
};

export default viewBook;
