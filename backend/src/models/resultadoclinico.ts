import mongoose, { Schema, Document} from 'mongoose';

const resultadoclinicoSchema = new Schema({
    nombrepaciente: {
        type: String
    },
    id: {
        type: String
    },
    fecharesultado: {
        type: String
    },
    resultado: {
        type: String
    },
    test: {
        type: String
    }
    });

export interface IResultadoClinico extends Document {
    nombrepaciente: String;
    id: String;
    fecharesultado: String;
    resultado: String;
    test: String;
}

export default mongoose.model<IResultadoClinico>('ResultadoClinico', resultadoclinicoSchema);