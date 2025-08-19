export const RenderGivenBy = ({given_by, sym}: {given_by: string | null, sym: string}) => {
    if (sym === "DEBT") return given_by
    if (sym === "BOUNTY") return given_by
    if (sym === "GANG") return given_by
    if (sym === "*") return "Automaric Mission"
    return `Given by ${given_by}`
}