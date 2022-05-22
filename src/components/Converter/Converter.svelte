<h1 class="text-2xl mb-2">Converter</h1>
<input bind:value={real} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="a">
<p class="inline-block">+</p>
<input bind:value={imaginary} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="b">
<p class="inline-block ">i</p>
<button class="bg-zinc-900 border-zinc-800 w-6 mx-2 rounded" on:click={ConvertNumbers}>⬌</button>
<input bind:value={radius} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="r">
<p class="inline-block"> × e ^ </p>
<input bind:value={angle} class="w-10 text-center inline-block bg-zinc-900 border-zinc-800" placeholder="θ">
<p class="inline-block">i</p>

<script>
    let real;
    let imaginary;

    let radius;
    let angle;

    const ConvertNumbers = () => {
        if(real != "" && imaginary != ""){
            ConvertFromComponentToExponten();
        }
        else if(radius != "" && angle != ""){
            ConvertFromExponentToComponent();
        }
    }

    const ConvertFromExponentToComponent = () => {
        let cosAngle = Math.cos(angle);
        let sinAngle = Math.sin(angle);

        real = (radius*cosAngle).toFixed(2);
        imaginary = (radius*sinAngle).toFixed(2);
    }

    const ConvertFromComponentToExponten = () => {
        radius = (Math.sqrt(real^2+imaginary^2)).toFixed(2);
        angle = (Math.atan(imaginary/real)).toFixed(2);
    }
</script>