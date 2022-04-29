export function addModal(isNew, item) {
  if (isNew) {
    this.tempProduct = {};
  } else {
    this.tempProduct = { ...item };
  }
  this.isNew = isNew;
  const productComponent = this.$refs.productModal;
  productComponent.showModal();
}

export function deleteModal(item) {
  this.tempProduct = item;
  const productComponent = this.$refs.delModal;
  productComponent.showModal();
}
