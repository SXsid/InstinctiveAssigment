import z from "zod"

export const addSchema = z.object({
    name:z.string(),
    cohort:z.string(),
    status:z.enum(["Active","Inactive"]),
    subject:z.string().array(),
    class:z.string(),
    joined_date:z.string()

})


export type AddSchemaType = z.infer<typeof addSchema>
