// TrieNode represents each node in the Trie
class TrieNode {
    constructor() {
        // Children is a map from character to TrieNode
        this.children = {};
        // isEndOfWord is true if the node represents the end of a word
        this.isEndOfWord = false;
    }
}

// Trie data structure class
class Trie {
    constructor() {
        // Root node of the Trie (empty node)
        this.root = new TrieNode();
    }

    // Inserts a word into the Trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            // If the character is not a child, add a new TrieNode
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            // Move to the child node
            node = node.children[char];
        }
        // Mark the end of the word
        node.isEndOfWord = true;
    }

    // Returns true if the word is in the Trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            // If the character is not found, word doesn't exist
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        // Check if current node marks the end of a word
        return node.isEndOfWord;
    }

    // Returns true if there is any word in the Trie that starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            // If the character is not found, prefix doesn't exist
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        // All characters in prefix found
        return true;
    }
}