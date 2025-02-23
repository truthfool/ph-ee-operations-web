/** TODO: Separate routing into feature modules for cleaner accounting module. */

/** Angular Imports */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/** Routing Imports */
import { Route } from "../core/route/route.service";

/** Translation Imports */
import { extract } from "../core/i18n/i18n.service";

/** Custom Components */
import { TransactionDetailsComponent } from "./transactions/transaction-details.component";
import { PaymentHubComponent } from "./paymenthub.component";

import { CurrenciesResolver } from "./transactions/resolver/currencies.resolver";
import { TransactionResolver } from "./transactions/resolver/transaction.resolver";
import { DfspResolver } from "./transactions/resolver/dfsp.resolver";
import { BatchesComponent } from "./batches/batches.component";
import { SubBatchesComponent } from "./sub-batches/sub-batches.component";
import { TransfersComponent } from "./transfers/transfers.component";

/** Payment HUB Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: "paymenthub",
      component: PaymentHubComponent,
      data: { title: extract("Payment Hub EE"), breadcrumb: "Payment Hub EE" },
      children: [
        {
          path: '',
          redirectTo: 'batches',
          pathMatch: 'full'
        },
        {
          path: "batches",
          component: BatchesComponent
        },
        {
          path: "sub-batches",
          component: SubBatchesComponent,
        },
        {
          path: "transfers",
          component: TransfersComponent,
        },
        {
          path: "transactions",
          children: [
            {
              path: "",
              component: TransfersComponent,
            },
            {
              path: "view/:id",
              component: TransactionDetailsComponent,
              data: {
                title: extract("View Transaction"),
                routeParamBreadcrumb: "id",
              },
              resolve: {
                transaction: TransactionResolver,
                dfspEntries: DfspResolver,
              },
            },
          ],
        }
      ],
    },
  ]),
];

/**
 * Payment HUB Routing Module
 *
 * Configures the payment hub routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CurrenciesResolver,
    TransactionResolver,
    DfspResolver,
  ],
})
export class PaymentHubRoutingModule {}
