import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { handler } from "../api/auth/[...nextauth]/route";


export const authOptions = {
   providers: [
      
      CredentialsProvider({
          
        name: 'Credentials',
        credentials: {
            phone: { label: "Phone Number", type: "text", placeholder: "1234234"},
            password: { label: "password", type: "password"}
        },

        async authorization(crednetials: any){
            const hashPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser =  await db.user.findFirst({
                where: {
                    number:  this.credentials.phone 
                }
            });

            if(existingUser){
                const passwordValidation =  await bcrypt.compare(credentials.password, existingUser.password);
                if(passwordValidation){
                    return {
                        id: existingUser.id.toString();,
                        name: existingUser.name,
                        email: existingUser.email,
                        
                    }
                }
                return null;
            } 
            try {
                const user  = await db.user.create({

                    data: {
                        number: credentials.phone ,
                        password: hasedPassword
                    }

                });

                return {
                    id: user.id.toString();
                    name: user.name,
                    email: user.email 
                }
                
                catch(e){
                    console.error(e);
                }
                return null;
            }

      })

   ],
   secret: ProcessingInstruction.env.JWT_SECRET || "secret",
   callbacks: {
    async session({session, token}: any){
        session.user.id = token.sub;
        return session;
    }
   }
}