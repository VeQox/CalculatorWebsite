<h1 class="text-2xl mb-2">Calculator</h1>
<input bind:value={Complex_1.Real} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="a">
<p class="inline-block">+</p>
<input bind:value={Complex_1.Imaginary} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="b">
<p class="inline-block ">i</p>

<input bind:value={operation} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800 mx-3" placeholder="+-/*">

<input bind:value={Complex_2.Real} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="a">
<p class="inline-block">+</p>
<input bind:value={Complex_2.Imaginary} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="b">
<p class="inline-block ">i</p>

<p></p>
<button class="bg-zinc-900 border-zinc-800 w-6 m-1 rounded" on:click={Calculate}>=</button>
<p></p>

<input bind:value={Complex_Result.Real} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="">
<p class="inline-block">+</p>
<input bind:value={Complex_Result.Imaginary} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="">
<p class="inline-block ">i</p>

<script>
    import ComplexNumber from "../../ComplexNumber.js";

    let Complex_1 = ComplexNumber.Empty();
    let Complex_2 = ComplexNumber.Empty();
    let Complex_Result = ComplexNumber.Empty();
    let operation;

    const Calculate = () => {
        if(operation != ""){
            switch (operation) {
                case '+':
                    Add();
                    break;
                case '-':
                    Subtract();
                    break;
                case '*':
                    Mulitply();
                    break;
                case '/':
                    Divide();
                    break;
            }
        }
    }

    const Add = () => {
        Complex_Result = ComplexNumber.Add(Complex_1, Complex_2);
    }

    const Subtract = () => {
        Complex_Result = ComplexNumber.Subtract(Complex_1, Complex_2);
    }

    const Mulitply = () => {
        let tmp = ComplexNumber.Mulitply(Complex_1, Complex_2);
        Complex_Result.Real = ComplexNumber.Real(tmp.Radius, tmp.Theta);
        Complex_Result.Imaginary = ComplexNumber.Imaginary(tmp.Radius, tmp.Theta);
    }

    const Divide = () => {
        let tmp = ComplexNumber.Divide(Complex_1, Complex_2);
        Complex_Result.Real = ComplexNumber.Real(tmp.Radius, tmp.Theta);
        Complex_Result.Imaginary = ComplexNumber.Imaginary(tmp.Radius, tmp.Theta);
    }
</script>