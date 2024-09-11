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
import { TableModule } from "primeng/table";
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CommonModule } from "@angular/common";
import { PurchasesTimesPipe } from "./pipes/purchases-times.pipe";
import { FormsModule } from "@angular/forms";
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from "@angular/common/http";
import { from, fromEvent } from 'rxjs';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TicketCardComponent,
        ChartCardComponent,
        TableComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        QRCodeModule,
        ClipboardModule,
        TableModule, 
        InputIconModule,
        IconFieldModule,
        InputTextModule,
        InputSwitchModule,
        CommonModule,
        PurchasesTimesPipe,
        FileSaverModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }