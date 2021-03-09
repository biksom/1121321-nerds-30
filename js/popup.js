<script type="text/javascript">
  const writeUs = document.querySelector(".write-us");
  const writePopup = document.querySelector(".popup");
  const close = document.querySelector(".popup-close");
  const form = writePopup.querySelector("form");
  const name = writePopup.querySelector(".[name=name]");
  const mail = writePopup.querySelector(".[name=mail]");
  const lead = writePopup.querySelector(".[name=lead]");

  const isStorageSupport = true;
  const storage = "";
  
  try{
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }


  writeUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    name.focus();
    if (storage) {
      name.value = storage
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function(evt) {
    if (!name.value || !mail.value || !lead.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя,майл и текст")
    } else {
      if (isStorageSupport){
      localStorage.setItem("name",name.value)
     }
    }
  });

   window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writePopup.classList.remove("modal-show");
      }
    }
   });
  </script>
