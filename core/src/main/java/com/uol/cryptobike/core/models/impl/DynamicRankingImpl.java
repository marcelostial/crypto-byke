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

package com.uol.cryptobike.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.uol.cryptobike.core.models.DynamicRanking;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    DynamicRanking.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/dynamic-ranking")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DynamicRankingImpl
    implements DynamicRanking
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String description;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String searchPlaceholder;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image background;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mobileDropDownTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mobileSelectButton;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mobileCancelButton;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnRank;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnName;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnCountry;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String columnDistance;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("description")
    public String getDescription() {
        return description;
    }

    @Override
    @JsonProperty("searchPlaceholder")
    public String getSearchPlaceholder() {
        return searchPlaceholder;
    }

    @Override
    @JsonProperty("background")
    public Image getBackground() {
        return background;
    }

    @Override
    @JsonProperty("mobileDropDownTitle")
    public String getMobileDropDownTitle() {
        return mobileDropDownTitle;
    }

    @Override
    @JsonProperty("mobileSelectButton")
    public String getMobileSelectButton() {
        return mobileSelectButton;
    }

    @Override
    @JsonProperty("mobileCancelButton")
    public String getMobileCancelButton() {
        return mobileCancelButton;
    }

    @Override
    @JsonProperty("columnRank")
    public String getColumnRank() {
        return columnRank;
    }

    @Override
    @JsonProperty("columnName")
    public String getColumnName() {
        return columnName;
    }

    @Override
    @JsonProperty("columnCountry")
    public String getColumnCountry() {
        return columnCountry;
    }

    @Override
    @JsonProperty("columnDistance")
    public String getColumnDistance() {
        return columnDistance;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
