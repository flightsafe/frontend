import { exec } from "child_process";
import * as dotenv from "dotenv";

(async () => {
  dotenv.config();
  const host = process.env.API_HOST || "http://localhost";
  exec(
    `swagger-codegen generate -i ${host}/spec -l typescript-axios -o ./src/api/client`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
      console.log(stderr);
    }
  );
})();
