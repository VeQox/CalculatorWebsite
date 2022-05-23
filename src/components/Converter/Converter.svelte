<h1 class="text-2xl mb-2">Converter</h1>
<input bind:value={Component.Real} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="a">
<p class="inline-block">+</p>
<input bind:value={Component.Imaginary} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="b">
<p class="inline-block ">i</p>
<button class="bg-zinc-900 border-zinc-800 w-6 mx-2 rounded" on:click={ConvertNumbers}>⬌</button>
<input bind:value={Exponent.Radius} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="r">
<p class="inline-block"> × e ^ </p>
<input bind:value={Exponent.Theta} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="θ">
<p class="inline-block">i</p>

<script>
    import ComplexNumber from "../../ComplexNumber.js";

    let Component = ComplexNumber.Empty();
    
    let Exponent = ComplexNumber.Empty();

    const ConvertNumbers = () => {
        if(Component.Real != "" && Component.Imaginary != ""){
            ConvertFromComponentToExponten();
        }
        else if(Exponent.Radius != "" && Exponent.Theta != ""){
            ConvertFromExponentToComponent();
        }
    }

    const ConvertFromExponentToComponent = () => {
        Component.Real = ComplexNumber.Real(Exponent.Radius, Exponent.Theta);
        Component.Imaginary = ComplexNumber.Imaginary(Exponent.radius, Exponent.Theta);
    }

    const ConvertFromComponentToExponten = () => {
        Exponent.Radius = ComplexNumber.Radius(Component.Real, Component.Imaginary);
        Exponent.Theta = ComplexNumber.Theta(Component.Real, Component.Imaginary);
    }
</script>