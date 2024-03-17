export interface Request {
  start_date: string;
  end_date: string;
}

export interface CreateBookingDesk {
  deskId: string;
  username: string;
  start_date: string;
  end_date: string;
}
