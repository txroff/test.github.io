//Анимация появления блоков
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('el-show');
      }
    });
  }
  
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.el-anim');
  
  for (let elm of elements) {
    observer.observe(elm);
  }