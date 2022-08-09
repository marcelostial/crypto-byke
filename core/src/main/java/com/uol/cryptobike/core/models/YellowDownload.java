/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code YellowDownload} Sling Model used for the {@code cryptobike/components/yellow-download} component.
 * 
 */
@ConsumerType
public interface YellowDownload
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("description")
    String getDescription();

    @JsonProperty("background")
    com.adobe.cq.wcm.core.components.models.Image getBackground();

    @JsonProperty("backgroundMobile")
    com.adobe.cq.wcm.core.components.models.Image getBackgroundMobile();

    @JsonProperty("iosLabel")
    String getIosLabel();

    @JsonProperty("iosUrl")
    String getIosUrl();

    @JsonProperty("androidLabel")
    String getAndroidLabel();

    @JsonProperty("androidUrl")
    String getAndroidUrl();

}
