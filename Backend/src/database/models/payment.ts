import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "payments",
  modelName: "Payment",
  timestamps: true,
})
class Payment extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.ENUM("COD", "Khalti", "Esewa"),
    defaultValue: "COD",
  })
  declare paymentMethod: string;
  @Column({
    type: DataType.ENUM("Paid", "Unpaid"),
    defaultValue: "Unpaid",
  })
  declare paymentStatus: string;
  @Column({
    type: DataType.STRING,
  })
  declare pidx: string;
}
export default Payment;
