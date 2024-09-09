import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QRCodeModule } from "angularx-qrcode";
import { ClipboardModule } from "@angular/cdk/clipboard";

import { AppComponent } from "./app.component";
import { TicketCardComponent } from "./ticket-card/ticket-card.component";
import { ChartCardComponent } from "./chart-card/chart-card.component";
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./table/table.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TicketCardComponent,
        ChartCardComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        QRCodeModule,
        ClipboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }