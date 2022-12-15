var addEventHandlers = function(ID) {
    let root = document.getElementById(ID);
    // helper function to traverse 
	let traverse = (node, level) => {
		if (node.nodeType !== 1){
            node.addEventListener('click', () => console.log(level));
		}
        for (let i=0; i<node.childNodes.length; i++) {
            traverse(node.childNodes[i], level+1);
        }
	}
    traverse(root, 0);
}

/* start student implementation */
function findString(id, text, period, onFound){
	let root = document.getElementById(id);

	// helper function to traverse 
	let traverse = (node) => {
		if (node.nodeType === 3){
			return node.nodeValue.includes(text);
		}
		else {
			let found = false;
			for (let i = 0; i < node.childNodes.length; i ++){
				found = found || traverse(node.childNodes[i]);
			}
			return found;
		}
	}

	let next = () => {
		if (traverse(root)){
			onFound();
		}
		else {
			setTimeout(next, period);
		}
	}

	next();
}