import { prisma } from '@/config';

async function findRoomsByHotelId(hotelId: number) {
  return prisma.room.findMany({
    where: {
      hotelId,
    },
  });
}

async function findRoomById(roomId: number) {
  return prisma.room.findFirst({
    where: {
      id: roomId,
    },
  });
}

const roomRepository = {
  findRoomsByHotelId,
  findRoomById,
};

export default roomRepository;
