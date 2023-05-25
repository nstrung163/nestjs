import { Controller } from "@nestjs/common";

@Controller({ host: "admin.example.com" })
export class AdminController {
  index(): string {
    return "Admin Page";
  }
}
