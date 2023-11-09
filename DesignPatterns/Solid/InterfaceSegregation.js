class Document {

}

class Machine {
    constructor() {
        if (this.constructor.name == "Machine") {
            throw new Error("Machine is abstract")
        }
    }

    print(doc) {
    }

    fax(doc) {
    }

    scan(doc) {
    }
}

class MultiFunctionPrinter extends Machine {
    print(doc) {
        //
    }
    fax(doc) {
        //
    }

    scan(doc) {
        //
    }

}

class OldFashionedPrinter extends Machine {
    print(doc) {
        //Ok
    }

    // fax(doc) {
    //     //do nothing
    // }

    scan(doc) {
        //
        throw new NotImpementedeError("OldFashionedPrinter.scan")
    }
}

class NotImpementedeError extends Error{
    constructor(name){
        let msg =`${name} is not implemented`
        super(msg)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,NotImpementedeError)
        }
    }
}

class Printer {
    constructor() {
        if (this.constructor.name == "Printer") {
            throw new Error("Machine is abstract")
        }
    }

    print() {
    }
}

class Scanner {
    constructor() {
        if (this.constructor.name == "Scanner") {
            throw new Error("Machine is abstract")
        }
    }

    scan() {
    }
}

class PhotoCopier {
    print(){}
    scan(){}
}

let printer = new OldFashionedPrinter();
printer.scan()
