const grid_cell_size = 24;
let x = grid_cell_size/2;
let y = grid_cell_size/2;

function parser (data, game)
{
	data = data.split("\n");

	let specs = data[0].split(";");

	if (specs[0] != "OGT"){
		console.log("WRONG FILE: THIS IS NOT AN OGT");

		return false;
	}

	let version = specs[1];
	let width = specs[2];
	let height = specs[3];

	console.log("Version: "+version+" | Width: "+width+" | Height: "+height);

	let canvas = [];

	for (let i = 1; i <= height; i++){
		let row = data[i].split(";");
		canvas.push([]);
		x = grid_cell_size/2;
		y = (i-1)*grid_cell_size + grid_cell_size/2;
		for (let j = 0; j < width; j++){
			canvas[i-1].push(Phaser.Display.Color.ValueToColor(row[j]));
			game.add.rectangle(x, y, grid_cell_size, grid_cell_size, canvas[i-1][j].color)
			x += grid_cell_size;
		}
	}

	return canvas;
}


function openOGT (file, game)
{
	fetch(file).then(ogt => ogt.text()).then(ogt => parser(ogt, game));
}
