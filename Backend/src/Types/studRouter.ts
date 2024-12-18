import z, { string } from "zod"

export const addSchema = z.object({
    name:z.string(),
    cohort:z.string(),
    status:z.boolean(),
    courses:z.array(
        z.object({
            name:z.string()
        })
    )

})
export const UpdateSchema = z.object({
    name:z.string().optional(),
    cohort:z.string().optional(),
    status:z.boolean().optional(),
    courses:z.array(
        z.object({
            name:z.string()
        })
    ).optional()

})

export type AddSchemaType = z.infer<typeof addSchema>
export type UpdateSchemaType = z.infer<typeof UpdateSchema>