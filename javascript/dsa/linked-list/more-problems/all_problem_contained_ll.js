//singly linked list with 

// ```
// isEmpty
// print
// append
// prepend
// insertValue
// removeFrom
// removeValue
// search
// reverse
// sumOfSubset
// swapAdj
// swapSubset
// rotateKTimes
// DetectCycle
// RemoveCycle
// DetectMiddleElementUsingFloyid
// sortLinkedList(mergeSort)
// sortLinkedList(quicksort)
// CheckPalindrome
// ```





class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.value)
            curr = curr.next;
        }
        console.log(arr.join("=>"))
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++
    }


    insertValue(index, value) {
        if (index < 0 || index > this.size) return null
        const node = new Node(value)
        let curr = this.head
        for (let i = 1; i < index - 1; i++) {
            curr = curr.next;
        }

        node.next = curr.next;
        curr.next = node;
        this.size++

    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        } else {
            let curr = this.head;
            for (let i = 1; i < index - 1; i++) {
                curr = curr.next;
            }
            let removedNode = curr.next;
            curr.next = removedNode.next;
            this.size--;
        }
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return;
        } else if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let curr = this.head;
            while (curr.next && curr.next.value !== value) {
                curr = curr.next;
            }
            let removedNode = curr.next;
            curr.next = removedNode.next;
            this.size--;
            return removedNode.value;
        }
    }


    removeDuplicatesUnsorted() {
        if (this.isEmpty()) return;

        let seen = new Set();
        let curr = this.head;
        let prev = null;

        while (curr) {
            if (seen.has(curr.value)) {
                prev.next = curr.next;
                this.size--;
            } else {
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    removeDuplicatesSorted() {
        if (this.isEmpty()) return;

        let curr = this.head;

        while (curr && curr.next) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }

    search(value) {
        let curr = this.head;
        for (let i = 1; i < this.size; i++) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
        }
        return undefined;
    }



    reverse() {
        let curr = this.head;
        let prev = null
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }


    sumOfSubset(m, n) {
        if (m < 1 || n > this.size || m > n) return;
        let ar = []
        let sum = 0;
        let curr = this.head
        for (let i = 1; i <= this.size; i++) {
            if (i >= m && i <= n) {
                ar.push(curr.value)
                sum += curr.value
            }
            curr = curr.next;
        }
        console.log(ar.join("+"), "=", sum)
        return sum;
    }


    swapAdj() {
        let prev = null;
        let curr = this.head;
        this.head = curr.next;
        while (curr && curr.next) {
            let next = curr.next;
            let nextPair = next.next;
            if (prev !== null) {
                prev.next = next;
            }
            next.next = curr;
            curr.next = nextPair
            prev = curr;
            curr = nextPair
        }
    }


    swapSubset(m, n) {
        if (m > n || m < 0 || n > this.size) return;

        let prev = null;
        let curr = this.head;

        for (let i = 1; i < m; i++) {
            prev = curr
            curr = curr.next;
        }

        let beforeM = prev;
        let Mth = curr;


        prev = null
        curr = this.head;
        for (let i = 1; i <= n; i++) {
            prev = curr;
            curr = curr.next;
        }

        let Nth = prev;
        let AfterN = curr;


        curr = Mth;
        while (curr !== AfterN) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }



        if (beforeM) {
            beforeM.next = Nth;
        } else {
            this.head = Nth;
        }

        Mth.next = AfterN;
    }




    rotateKTimes(k) {
        let numberOfTimesToRotate = k % this.size;
        let curr = this.head
        for (let i = 1; i < this.size - numberOfTimesToRotate - 1; i++) {
            curr = curr.next;
        }
        let newLastNode = curr;

        let newHeadNode = curr.next;
        curr = newHeadNode;
        while (curr.next) {
            curr = curr.next;
        }
        let originalLastNode = curr;
        originalLastNode.next = this.head;
        this.head = newHeadNode;
        newLastNode.next = null;
    }


    detectCycle() {
        let slow = this.head
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }


    removeCycle() {
        let slow = this.head;
        let fast = this.head;

        // Step 1: Detect cycle
        let hasCycle = false;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                hasCycle = true;
                break;
            }
        }

        if (!hasCycle) {
            console.log("No cycle found");
            return;
        }

        // Step 2: Move slow to head
        slow = this.head;

        // Step 3: Find start of cycle
        let prev = null; // to track last node of cycle

        while (slow !== fast) {
            prev = fast;
            slow = slow.next;
            fast = fast.next;
        }

        // Step 4: Break the cycle
        prev.next = null;

        console.log("Cycle removed");
    }



    detectMiddleElementUsingFloyd() {
        if (!this.isEmpty()) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }


        return slow.value
    }


    getMiddle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    sortLinkedList(head) {
        if (!head || !head.next) return head;

        let mid = this.getMiddle(head);
        let rightHead = mid.next;
        mid.next = null;

        let left = this.sortLinkedList(head);
        let right = this.sortLinkedList(rightHead);

        return this.merge(left, right);
    }

    merge(l1, l2) {
        let dummy = { next: null };
        let tail = dummy;

        while (l1 && l2) {
            if (l1.value < l2.value) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;
        return dummy.next;
    }



    checkPalindrome() {
        function getMid(head) {
            let slow = head;
            let fast = head;

            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;


            }

            return slow;
        }


        function reverse(node) {
            let prev = null;
            let curr = node;

            while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            return prev;

        }



        function comparison(first, second) {
            while (second) {
                if (first.value !== second.value) {
                    return false;
                }
                first = first.next;
                second = second.next;
            }
            return true;
        }


        const middleNode = getMid(this.head);
        const secondHead = reverse(middleNode);

        const result = comparison(this.head, secondHead);
        console.log("palindrome check result = ", result ? "Palindrome" : "Not Palindrome")
        return result;
    }

}










const ll = new LinkedList()

for (let i = 10; i > 0; i--) {
    ll.append(i)
}


// ll.append("M")
// ll.append("A")
// ll.append("L")
// ll.append("A")
// ll.append("Y")
// ll.append("A")
// ll.append("L")
// ll.append("A")
// ll.append("M")

ll.print()

// ll.insertValue(5,200)
//ll.removeFrom(5)
//ll.removeValue(4)
// console.log(ll.search(6))
// ll.reverse()
// ll.swapAdj()
// ll.swapSubset(3,5)
// console.log(ll.sumOfSubset(4,10))
// ll.rotateKTimes(3)
// ll.head = ll.sortLinkedList(ll.head)
// ll.checkPalindrome()
// ll.removeDuplicatesSorted()
// ll.removeDuplicatesUnsorted()
ll.print()























