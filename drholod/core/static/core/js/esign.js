var canvas;
var context;

window.onload = function() {
      canvas = document.getElementById("drawingCanvas");
      context = canvas.getContext("2d");
       
      // Подключаем требуемые для рисования события
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
   }

function startDrawing(e) {
	// Начинаем рисовать
	isDrawing = true;
	
	// Создаем новый путь (с текущим цветом и толщиной линии) 
	context.beginPath();
	
	// Нажатием левой кнопки мыши помещаем "кисть" на холст
	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}   

function draw(e) {
	if (isDrawing == true)
	{
	  	// Определяем текущие координаты указателя мыши
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		
		// Рисуем линию до новой координаты
		context.lineTo(x, y);
		context.stroke();
	}
}

function stopDrawing() {
    isDrawing = false;	
}

var url = canvas.toDataURL("image/jpeg");

window.location = canvas.toDataURL();

function saveCanvas() {
    // Находим элемент <img>
	var imageCopy = document.getElementById("savedImageCopy");
	
	// Отображаем данные холста в элементе <img>
	imageCopy.src = canvas.toDataURL();
	
	// Показываем элемент <div>, делая изображение видимым
	// делая изображение видимым
	var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}