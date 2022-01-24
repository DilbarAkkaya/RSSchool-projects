export const renderFormOfGarage = () => {
  const formHtml =
  `<div>
    <form class="form" id="create">
      <input type="text" class="input" id="create-name" name="name">
      <input type="color" class="color" name="color" id="create-color" value="#ffffff">
      <button class="button" id="create-submit" type="submit">Create</button>
    </form>
    <form class="form" id="update">
      <input type="text" class="input" id="update-name" name="name" disabled>
      <input type="color" class="color" name="color" id="update-color" value="#ffffff">
      <button class="button" id="update-submit" type="submit">Update</button>
    </form>
  </div>`;
  return formHtml;
}
