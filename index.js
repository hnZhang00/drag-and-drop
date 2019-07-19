(function () {
	var dragEl = null;
	var columns = document.querySelectorAll('#columns .column');
      
  [].forEach.call(columns,function(column){
    column.addEventListener("dragstart",domDragStart,false);
    column.addEventListener('dragenter', domDragEnter, false);
    column.addEventListener('dragover', domDragOver, false);
    column.addEventListener('dragleave', domDragLeave, false);
    column.addEventListener('drop', domDrop, false);
    column.addEventListener('dragend', domDrapEnd, false);
  });
  
  function domDragStart(e) {
    e.target.classList.add('start');

    dragEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }
  function domDragEnter(e) {
    e.target.classList.add('over');
  }
  function domDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); 
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }
  function domDragLeave(e) {
    e.target.classList.remove('over'); 
  }
  function domDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (dragEl != this) {
      dragEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
  }
  function domDrapEnd(e) {
    [].forEach.call(columns, function (column) {
  		column.classList.remove('start');
      column.classList.remove('over');
    });
  }
})()