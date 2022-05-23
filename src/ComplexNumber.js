export default class ComplexNumber {

    constructor(radius, theta, real, imaginary){
        this.Radius = radius;
        this.Theta = theta;
        this.Real = real;
        this.Imaginary = imaginary;
    }
    
    static Empty(){
        return new ComplexNumber(undefined, undefined, undefined, undefined);
    }

    static Component(real, imaginary){
        return new ComplexNumber(this.Radius(real, imaginary), this.Theta(real, imaginary), real, imaginary);
    }

    static Exponent(radius, theta){
        return new ComplexNumber(radius, theta, undefined, undefined);
    }

    static Radius(real, imaginary){
        return (Math.sqrt(real*real+imaginary*imaginary)).toFixed(2);
    }

    static Theta(real, imaginary){
        let theta = 0;
        if (real < 0 && imaginary > 0) {
            theta = Math.PI;
        }
        if(real < 0 && imaginary < 0){
            theta = Math.PI;
        }
        if(real > 0 && imaginary < 0){
            theta = 3*Math.PI/2;
        }
        
        return theta += parseFloat((Math.atan(imaginary/real)).toFixed(2));;
    }

    static Real(radius, theta){
        return (radius*Math.cos(theta)).toFixed(2);
    }

    static Imaginary(radius, theta){
        return (radius*Math.sin(theta)).toFixed(2);
    }

    static Add(a, b){
        return ComplexNumber.Component(parseFloat(a.Real) + parseFloat(b.Real), parseFloat(a.Imaginary) + parseFloat(b.Imaginary));
    }
    
    static Subtract(a,b){
        return ComplexNumber.Component(parseFloat(a.Real) - parseFloat(b.Real), parseFloat(a.Imaginary) - parseFloat(b.Imaginary));
    }

    static ConvertToExponent(a){
        a.Radius = this.Radius(a.Real, a.Imaginary);
        a.Theta = this.Theta(a.Real, a.Imaginary);
    }

    static ConvertToComponent(a){
        a.Real = this.Real(a.Radius, a.Theta);
        a.Imaginary = this.Theta(a.Radius, a.Theta);
    }

    static Mulitply(a,b){
        this.ConvertToExponent(a);
        this.ConvertToExponent(b);
        return ComplexNumber.Exponent(parseFloat(a.Radius) * parseFloat(b.Radius), parseFloat(a.Theta) + parseFloat(b.Theta));
    }

    static Divide(a,b){
        this.ConvertToExponent(a);
        this.ConvertToExponent(b);
        return ComplexNumber.Exponent(parseFloat(a.Radius) / parseFloat(b.Radius), parseFloat(a.Theta) - parseFloat(b.Theta));
    }
}