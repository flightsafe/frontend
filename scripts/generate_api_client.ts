import * as dotenv from "dotenv";
import { codegen } from "swagger-axios-codegen";
import axios from "axios";

(async () => {
  dotenv.config();
  const host = process.env.API_HOST || "http://localhost";
  const response = await axios.get(`${host}/spec/?format=openapi-json`);
  const data = response.data;

  await codegen({
    source: data,
    methodNameMode: "operationId",
    useHeaderParameters: true,
    outputDir: "./packages/api_client",
    openApi: data.openapi,
  });
})();
