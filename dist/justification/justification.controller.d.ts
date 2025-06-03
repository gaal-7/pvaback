import { JustificationService } from './justification.service';
export declare class JustificationController {
    private readonly justificationService;
    constructor(justificationService: JustificationService);
    create(req: any, body: {
        reason: string;
        date: string;
    }): Promise<import("./justification.entity").Justification>;
    findAll(): Promise<import("./justification.entity").Justification[]>;
    findOne(id: number): Promise<import("./justification.entity").Justification>;
    updateStatus(id: number, status: 'pending' | 'approved' | 'rejected'): Promise<import("./justification.entity").Justification>;
}
