export interface Ticket{
    idT: string 
    title: string
    assignedTo: string
    assignedBy : string
    created: Date
    dueTo : Date
    description: string
    //priority: string
    status: string 
}