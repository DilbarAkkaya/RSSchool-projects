function dragHandler() {
  function handleDragStart(e: DragEvent) {
    (e.dataTransfer as DataTransfer).setData('text', (e.target as HTMLImageElement).id);
  }

  function handleDragEnterLeave(e: DragEvent) {
    if (e.type == 'dragenter') {
      (e.target as HTMLImageElement).className = 'drag-enter';
    } else {
      (e.target as HTMLImageElement).className = 'card-img';
    }
  }

  function handleOverDrop(e: DragEvent) {
    const draggedId = (e.dataTransfer as DataTransfer).getData('text');
    const draggedEl = document.getElementById(draggedId) as HTMLImageElement;
    e.preventDefault();
    if (e.type != 'drop') {
      return;
    }
    if (e.type == 'drop') {
      draggedEl.style.position = 'absolute';
      draggedEl.style.transform = 'translate(-50%, -50%)';
      draggedEl.style.left = `${(e.clientX - 350)}px`;
      draggedEl.style.top = `${(e.clientY - 200)}px`;
    }

    (draggedEl.parentNode as HTMLElement).removeChild(draggedEl);
    (e.target as HTMLElement).appendChild(draggedEl);
  }

  const draggable = [...Array.from(document.querySelectorAll('[draggable]'))];
  const targets = [...Array.from(document.querySelectorAll('[data-drop-target]'))];

  for (let i = 0; i < draggable.length; i++) {
    (draggable[i] as HTMLElement).addEventListener('dragstart', handleDragStart);
  }
  for (let i = 0; i < targets.length; i++) {
    (targets[i] as HTMLElement).addEventListener('dragover', handleOverDrop);
    (targets[i] as HTMLElement).addEventListener('drop', handleOverDrop);
    (targets[i] as HTMLElement).addEventListener('dragenter', handleDragEnterLeave);
    (targets[i] as HTMLElement).addEventListener('dragleave', handleDragEnterLeave);
  }
}
export default dragHandler;
