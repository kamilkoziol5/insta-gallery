const fs = require('fs');
const path = require('path');

const mainFolder = './public';
const subfolders = fs.readdirSync(mainFolder);

subfolders.forEach(folder => {
	const folderPath = path.join(mainFolder, folder);
	if (fs.statSync(folderPath).isDirectory()) {
		const files = fs.readdirSync(folderPath);

		files.forEach((file, index) => {
			const ext = path.extname(file); 
			const newName = `photo${index + 1}${ext}`;
			const oldPath = path.join(folderPath, file);
			const newPath = path.join(folderPath, newName);

			fs.renameSync(oldPath, newPath);
			console.log(`${folder}/${file} ➝ ${newName}`);
		});
	}
});

console.log('✅ Wszystkie pliki w podfolderach zostały zmienione!');
