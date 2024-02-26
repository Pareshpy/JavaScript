var num = 0;
        num = prompt("Enter a Number");
        document.getElementById("input").innerHTML=num;
        console.log(factorial(num));
        function factorial(n) {
            if (n == 0) return 1;
            return n * factorial(n - 1);
        }
        document.getElementById("output").innerHTML=factorial(num);