export default class ComplexNumber {
    constructor(radius, theta, real, imaginary){
        this.radius = radius;
        this.theta = theta;
        this.real = real;
        this.imaginary = imaginary;
    }
    
    static Component(real, imaginary){
        return new ComplexNumber(undefined, undefined, real, imaginary);
    }

    static Exponent(radius, theta){
        return new ComplexNumber(radius, theta, undefined, undefined);
    }

    get Radius(){
        if(this.radius != undefined){
            return this.radius;
        }
        else{
            return (Math.sqrt(this.real^2+this.imaginary^2)).toFixed(2);
        }
    }

    get Theta(){
        if(this.theta != undefined){
            return this.theta;
        }
        else{
            return (Math.atan(this.imaginary/this.real)).toFixed(2);
        }
    }

    get Real(){
        if(this.real != undefined){
            return this.real;
        }
        else{
            return (this.radius*Math.cos(this.theta)).toFixed(2);
        }
    }

    get Imaginary(){
        if(this.imaginary != undefined){
            return this.imaginary;
        }
        else{
            return (radius*Math.sin(this.theta)).toFixed(2);
        }
    }

    Add(other){
        return ComplexNumber.Component(parseFloat(this.Real) + parseFloat(other.Real), parseFloa(this.Imaginary) + parseFloat(other.Imaginary));
    }
    
    Subtract(){
        return ComplexNumber.Component(parseFloat(this.Real) - parseFloat(other.Real), parseFloa(this.Imaginary) - parseFloat(other.Imaginary));
    }

    Mulitply(){
        return ComplexNumber.Exponent(parseFloat(this.Radius) * parseFloat(other.Radius), parseFloat(this.Imaginary) + parseFloat(other.Imaginary));
    }

    Divide(){
        return ComplexNumber.Exponent(parseFloat(this.Radius) / parseFloat(other.Radius), parseFloat(this.Imaginary) - parseFloat(other.Imaginary));
    }
}