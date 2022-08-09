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
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code DynamicRanking} Sling Model used for the {@code cryptobike/components/dynamic-ranking} component.
 * 
 */
@ConsumerType
public interface DynamicRanking
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("description")
    String getDescription();

    @JsonProperty("background")
    Image getBackground();

    @JsonProperty("searchPlaceholder")
    String getSearchPlaceholder();

    @JsonProperty("nameOptionLabel")
    String getNameOptionLabel();

    @JsonProperty("countryOptionLabel")
    String getCountryOptionLabel();

    @JsonProperty("stateOptionLabel")
    String getStateOptionLabel();

    @JsonProperty("cityOptionLabel")
    String getCityOptionLabel();

    @JsonProperty("mobileDropDownTitle")
    String getMobileDropDownTitle();

    @JsonProperty("mobileSelectButton")
    String getMobileSelectButton();

    @JsonProperty("mobileCancelButton")
    String getMobileCancelButton();

    @JsonProperty("columnRank")
    String getColumnRank();

    @JsonProperty("columnName")
    String getColumnName();

    @JsonProperty("columnCountry")
    String getColumnCountry();

    @JsonProperty("columnDistance")
    String getColumnDistance();

    @JsonProperty("notFoundTitle")
    String getNotFoundTitle();

    @JsonProperty("notFoundDescription")
    String getNotFoundDescription();

}
