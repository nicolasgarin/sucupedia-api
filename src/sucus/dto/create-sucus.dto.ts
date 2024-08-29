//export class CreateSucusDto {}
import {Sucu} from '@prisma/client'

export type CreateSucusDto = Omit<Sucu, 'id' | 'createdAt' | 'updatedAt'>