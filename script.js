const images = ['images/img_001.jpg', 'images/img_002.jpg', 'images/img_003.jpg', 'images/img_004.jpg', 'images/img_005.jpg', 
                'images/img_006.jpg', 'images/img_007.jpg', 'images/img_008.jpg', 'images/img_009.jpg', 'images/img_010.jpg', 
                'images/img_011.jpg', 'images/img_012.jpg', 'images/img_013.jpg', 'images/img_014.jpg', 'images/img_015.jpg', 
                'images/img_016.jpg', 'images/img_017.jpg', 'images/img_018.jpg', 'images/img_019.jpg', 'images/img_020.jpg', 
                'images/img_021.jpg', 'images/img_022.jpg', 'images/img_023.jpg', 'images/img_024.jpg', 'images/img_025.jpg', 
                'images/img_026.jpg', 'images/img_027.jpg', 'images/img_028.jpg', 'images/img_029.jpg', 'images/img_030.jpg', 
                'images/img_031.jpg', 'images/img_032.jpg', 'images/img_033.jpg', 'images/img_034.jpg', 'images/img_035.jpg', 
                'images/img_036.jpg', 'images/img_037.jpg', 'images/img_038.jpg', 'images/img_039.jpg', 'images/img_040.jpg', 
                'images/img_041.jpg', 'images/img_042.jpg', 'images/img_043.jpg', 'images/img_044.jpg', 'images/img_045.jpg', 
                'images/img_046.jpg', 'images/img_047.jpg', 'images/img_048.jpg', 'images/img_049.jpg', 'images/img_050.jpg', 
                'images/img_051.jpg', 'images/img_052.jpg', 'images/img_053.jpg', 'images/img_054.jpg', 'images/img_055.jpg', 
                'images/img_056.jpg', 'images/img_057.jpg', 'images/img_058.jpg', 'images/img_059.jpg', 'images/img_060.jpg', 
                'images/img_061.jpg', 'images/img_062.jpg', 'images/img_063.jpg', 'images/img_064.jpg', 'images/img_065.jpg', 
                'images/img_066.jpg', 'images/img_067.jpg', 'images/img_068.jpg', 'images/img_069.jpg', 'images/img_070.jpg', 
                'images/img_071.jpg', 'images/img_072.jpg', 'images/img_073.jpg', 'images/img_074.jpg', 'images/img_075.jpg', 
                'images/img_076.jpg', 'images/img_077.jpg', 'images/img_078.jpg', 'images/img_079.jpg', 'images/img_080.jpg', 
                'images/img_081.jpg', 'images/img_082.jpg', 'images/img_083.jpg', 'images/img_084.jpg', 'images/img_085.jpg', 
                'images/img_086.jpg', 'images/img_087.jpg', 'images/img_088.jpg', 'images/img_089.jpg', 'images/img_090.jpg', 
                'images/img_091.jpg', 'images/img_092.jpg', 'images/img_093.jpg', 'images/img_094.jpg', 'images/img_095.jpg', 
                'images/img_096.jpg', 'images/img_097.jpg', 'images/img_098.jpg', 'images/img_099.jpg', 'images/img_100.jpg', 
                'images/img_101.jpg', 'images/img_102.jpg', 'images/img_103.jpg', 'images/img_104.jpg', 'images/img_105.jpg', 
                'images/img_106.jpg', 'images/img_107.jpg', 'images/img_108.jpg', 'images/img_109.jpg', 'images/img_110.jpg', 
                'images/img_111.jpg', 'images/img_112.jpg', 'images/img_113.jpg', 'images/img_114.jpg', 'images/img_115.jpg', 
                'images/img_116.jpg', 'images/img_117.jpg', 'images/img_118.jpg', 'images/img_119.jpg', 'images/img_120.jpg', 
                'images/img_121.jpg', 'images/img_122.jpg', 'images/img_123.jpg', 'images/img_124.jpg', 'images/img_125.jpg', 
                'images/img_126.jpg', 'images/img_127.jpg', 'images/img_128.jpg', 'images/img_129.jpg', 'images/img_130.jpg', 
                'images/img_131.jpg', 'images/img_132.jpg', 'images/img_133.jpg', 'images/img_134.jpg', 'images/img_135.jpg', 
                'images/img_136.jpg', 'images/img_137.jpg', 'images/img_138.jpg', 'images/img_139.jpg', 'images/img_140.jpg', 
                'images/img_141.jpg', 'images/img_142.jpg', 'images/img_143.jpg', 'images/img_144.jpg', 'images/img_145.jpg', 
                'images/img_146.jpg', 'images/img_147.jpg', 'images/img_148.jpg', 'images/img_149.jpg', 'images/img_150.jpg', 
                'images/img_151.jpg', 'images/img_152.jpg', 'images/img_153.jpg', 'images/img_154.jpg', 'images/img_155.jpg', 
                'images/img_156.jpg', 'images/img_157.jpg', 'images/img_158.jpg', 'images/img_159.jpg', 'images/img_160.jpg', 
                'images/img_161.jpg', 'images/img_162.jpg', 'images/img_163.jpg', 'images/img_164.jpg', 'images/img_165.jpg', 
                'images/img_166.jpg', 'images/img_167.jpg', 'images/img_168.jpg', 'images/img_169.jpg', 'images/img_170.jpg', 
                'images/img_171.jpg', 'images/img_172.jpg', 'images/img_173.jpg', 'images/img_174.jpg', 'images/img_175.jpg', 
                'images/img_176.jpg', 'images/img_177.jpg', 'images/img_178.jpg', 'images/img_179.jpg', 'images/img_180.jpg', 
                'images/img_181.jpg', 'images/img_182.jpg', 'images/img_183.jpg', 'images/img_184.jpg', 'images/img_185.jpg', 
                'images/img_186.jpg'
];
// Seleccionar una imagen al azar para mostrarla al cargar la página
let currentIndex = Math.floor(Math.random() * images.length); // Índice de la imagen actual

// Referencias a los elementos del DOM
const carouselImage = document.getElementById('carouselImage'); // Elemento de imagen del carrusel
const prevBtn = document.getElementById('prevBtn'); // Botón para imagen anterior
const nextBtn = document.getElementById('nextBtn'); // Botón para imagen siguiente

// Función para mostrar una imagen basada en el índice proporcionado
function showImage(index) {
    carouselImage.src = images[index];
}

// Función para mostrar la imagen anterior
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

// Función para mostrar una imagen aleatoria diferente
function nextImage() {
    let randomIndex;
    // Asegurarse de que la nueva imagen sea diferente a la actual
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentIndex);
    currentIndex = randomIndex;
    showImage(currentIndex);
}

// Agregar eventos de clic a los botones
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Mostrar imagen al azar al cargar la página
showImage(currentIndex);

setInterval(nextImage, 60000); // Cambia la imagen cada 60 segundos
