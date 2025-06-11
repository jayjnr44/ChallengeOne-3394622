class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null); // for lowercase a-z
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        
        for (let char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0); // Convert char to index (0-25)
            
            // Create new node if it doesn't exist
            if (current.children[index] === null) {
                current.children[index] = new TrieNode();
            }
            
            current = current.children[index];
        }
        
        // Mark the end of the word
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        
        for (let char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            
            // If character path doesn't exist, word is not in trie
            if (current.children[index] === null) {
                return false;
            }
            
            current = current.children[index];
        }
        
        // Return true only if we've reached end of a complete word
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        
        for (let char of prefix) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            
            // If character path doesn't exist, no word has this prefix
            if (current.children[index] === null) {
                return false;
            }
            
            current = current.children[index];
        }
        
        // If we can traverse the entire prefix, it exists
        return true;
    }
}

// Test the implementation with the provided example
const trie = new Trie();

console.log("Operations and Results:");

trie.insert("apple");
console.log("insert('apple') -> null");

console.log("search('apple') ->", trie.search("apple"));   // true
console.log("search('app') ->", trie.search("app"));       // false
console.log("startsWith('app') ->", trie.startsWith("app")); // true

trie.insert("app");
console.log("insert('app') -> null");

console.log("search('app') ->", trie.search("app"));       // true
