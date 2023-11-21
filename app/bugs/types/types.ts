export interface Bug {
  id: string;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "CLOSE"; // Update enum values to uppercase
  createdAt: Date;
  updatedAt: Date;
  assignedToUserId: string | null;
}
