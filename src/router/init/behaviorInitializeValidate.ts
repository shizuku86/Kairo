import type { AddonProperty } from "../AddonProperty";
import { BehaviorInitializePending } from "./behaviorInitializePending";

/**
 * BehaviorInitializePendingに仮置きされたアドオンを、
 * Registerで登録しても良いかどうかを検証するためのクラス
 * 
 * A class for validating whether addons temporarily stored in BehaviorInitializePending
 * can be registered in Register.
 */
export class BehaviorInitializeValidate {
    private static validatedAddons: AddonProperty[];

    static validatePendingAddons(): void {
        const pendingAddons = BehaviorInitializePending.getAll();

        this.validatedAddons = pendingAddons.filter(addonProperty => {
            return this.validateAddonProperty(addonProperty);
        });
    }

    private static validateAddonProperty(addonProperty: AddonProperty): boolean {
        return true;
    }

    static get(): AddonProperty[] {
        return this.validatedAddons;
    }
}