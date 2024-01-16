function stringChop(str, size) {
	if(str===null){
		return [];
	}
	let chunk=[]
	for(let i=0;i<str.length;i=i+size){
	let pieceofChunk=str.slice(i,i+size)
		chunk.push(pieceofChunk)
	}
	return chunk
}

// Do not change the code below
//const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
