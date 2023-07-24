import { Booking } from '@prisma/client';
import { prisma } from '@/config';

type CreateBookingParams = Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>;

async function create({ roomId, userId }: CreateBookingParams): Promise<Booking> {
  return prisma.booking.create({
    data: {
      roomId,
      userId,
    },
  });
}

async function findBookingByRoomId(roomId: number) {
  return prisma.booking.findMany({
    where: {
      roomId,
    },
    include: {
      Room: true,
    },
  });
}

async function findBookingByUserId(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId,
    },
    include: {
      Room: true,
    },
  });
}

const bookingRepository = {
  create,
  findBookingByRoomId,
  findBookingByUserId,
};

export default bookingRepository;
