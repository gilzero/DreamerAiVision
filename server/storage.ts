import { 
  contactMessages, 
  type ContactMessage, 
  type InsertContactMessage 
} from "@shared/schema";
import { db } from "./db";
import { eq as _eq, desc } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class SQLiteStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    try {
      const result = await db.insert(contactMessages)
        .values(message)
        .returning();
      
      return result[0];
    } catch (error) {
      console.error("Error creating contact message:", error);
      throw new Error("Failed to store contact message");
    }
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    try {
      return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      throw new Error("Failed to retrieve contact messages");
    }
  }
}

export const storage = new SQLiteStorage();
