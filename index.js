(function () {
	var dragEl = null;
	var columns = document.querySelectorAll('#columns .column');
      
  [].forEach.call(columns,function(column){
    column.addEventListener("dragstart",domdrugstart,false);
    column.addEventListener('dragenter', domdrugenter, false);
    column.addEventListener('dragover', domdrugover, false);
    column.addEventListener('dragleave', domdrugleave, false);
    column.addEventListener('drop', domdrop, false);
    column.addEventListener('dragend', domdrapend, false);
  });
  
  function domdrugstart(e) {
    e.target.classList.add('start');

    dragEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }
  function domdrugenter(e) {
    e.target.classList.add('over');
  }
  function domdrugover(e) {
    if (e.preventDefault) {
      e.preventDefault(); 
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }
  function domdrugleave(e) {
    e.target.classList.remove('over'); 
  }
  function domdrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (dragEl != this) {
      dragEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
  }
  function domdrapend(e) {
    [].forEach.call(columns, function (column) {
  		column.classList.remove('start');
      column.classList.remove('over');
    });
  }
})()