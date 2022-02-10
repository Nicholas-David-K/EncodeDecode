// const caesarEncoded = (s, n) => {
// 	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// 	let lc = alphabet.replace(/\s/g, '').toLowerCase().split('')
// 	let uc = alphabet.replace(/\s/g, '').toUpperCase().split('')

// 	return Array.from(s)
// 		.map((v) => {
// 			if (lc.indexOf(v.toLowerCase()) === -1 || uc.indexOf(v.toUpperCase()) === -1) {
// 				return v
// 			}

// 			const lcEncryptIndex = (lc.indexOf(v.toLowerCase()) + n) % alphabet.length
// 			const lcEncryptedChar = lc[lcEncryptIndex]

// 			const ucEncryptIndex = (uc.indexOf(v.toUpperCase()) + n) % alphabet.length
// 			const ucEncryptedChar = uc[ucEncryptIndex]

// 			return lc.indexOf(v) !== -1 ? lcEncryptedChar : ucEncryptedChar
// 		})
// 		.join('')
// }




// const caesarDecoded = (s, n) => {
// 	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// 	let lc = alphabet.replace(/\s/g, '').toLowerCase().split('')
// 	let uc = alphabet.replace(/\s/g, '').toUpperCase().split('')

// 	return Array.from(s)
// 		.map((v) => {
// 			if (lc.indexOf(v.toLowerCase()) === -1 || uc.indexOf(v.toUpperCase()) === -1) {
// 				return v
// 			}

// 			let lcEncryptIndex = (lc.indexOf(v.toLowerCase()) - n) % alphabet.length
// 			lcEncryptIndex = lcEncryptIndex < 0 ? lcEncryptIndex + alphabet.length : lcEncryptIndex
// 			const lcEncryptedChar = lc[lcEncryptIndex]

// 			let ucEncryptIndex = (uc.indexOf(v.toUpperCase()) - n) % alphabet.length
// 			ucEncryptIndex = ucEncryptIndex < 0 ? ucEncryptIndex + alphabet.length : ucEncryptIndex
// 			const ucEncryptedChar = uc[ucEncryptIndex]

// 			return lc.indexOf(v) !== -1 ? lcEncryptedChar : ucEncryptedChar
// 		})
// 		.join('')
// }



var DecyperController = (function() {
    const caesarDecoded = (s, n=3) => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let lc = alphabet.replace(/\s/g, '').toLowerCase().split('')
        let uc = alphabet.replace(/\s/g, '').toUpperCase().split('')
    
        return Array.from(s)
            .map((v) => {
                if (lc.indexOf(v.toLowerCase()) === -1 || uc.indexOf(v.toUpperCase()) === -1) {
                    return v
                }
    
                let lcEncryptIndex = (lc.indexOf(v.toLowerCase()) - n) % alphabet.length
                lcEncryptIndex = lcEncryptIndex < 0 ? lcEncryptIndex + alphabet.length : lcEncryptIndex
                const lcEncryptedChar = lc[lcEncryptIndex]
    
                let ucEncryptIndex = (uc.indexOf(v.toUpperCase()) - n) % alphabet.length
                ucEncryptIndex = ucEncryptIndex < 0 ? ucEncryptIndex + alphabet.length : ucEncryptIndex
                const ucEncryptedChar = uc[ucEncryptIndex]
    
                return lc.indexOf(v) !== -1 ? lcEncryptedChar : ucEncryptedChar
            })
            .join('')
    }

    return {
        getDeCypher: function(message) {
            return caesarDecoded(message);
        }
    }
})();




var CyperController = (function() {
    const caesarEncoded = (s, n=3) => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let lc = alphabet.replace(/\s/g, '').toLowerCase().split('')
        let uc = alphabet.replace(/\s/g, '').toUpperCase().split('')
    
        return Array.from(s)
            .map((v) => {
                if (lc.indexOf(v.toLowerCase()) === -1 || uc.indexOf(v.toUpperCase()) === -1) {
                    return v
                }
    
                const lcEncryptIndex = (lc.indexOf(v.toLowerCase()) + n) % alphabet.length
                const lcEncryptedChar = lc[lcEncryptIndex]
    
                const ucEncryptIndex = (uc.indexOf(v.toUpperCase()) + n) % alphabet.length
                const ucEncryptedChar = uc[ucEncryptIndex]
    
                return lc.indexOf(v) !== -1 ? lcEncryptedChar : ucEncryptedChar
            })
            .join('')
    }

    return {
        getCypher: function(message) {
            return caesarEncoded(message);
        }
    }
})();




// UI Controller
var UIController = (function(cyper, decyper) {



    
    document.getElementById('encrypt_btn').addEventListener('click', function(e) {
        var input = document.getElementById('encrypt_input').value;
        e.preventDefault();
        
        cypheredText = cyper.getCypher(input);
        document.getElementById('title').innerHTML = cypheredText;
    });
    
    
    
    
    
    document.getElementById('decrypt_btn').addEventListener('click', function(e) {
        var input2 = document.getElementById('decrypt_input').value;
        e.preventDefault();

        decypheredText = decyper.getDeCypher(input2);
        document.getElementById('title2').innerHTML = decypheredText;
    });
    


    


})(CyperController, DecyperController);