import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';

export function createAccessToken(payload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1h",
            },
            // Callback
            
        )
    })
}